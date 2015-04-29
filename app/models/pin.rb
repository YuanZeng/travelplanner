class Pin < ActiveRecord::Base
	belongs_to :user
	has_attached_file :image, :styles => { :medium => "300x300>", :thumb => "100x100>" }
	validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png"]
	validates :image, presence: true
	validates :description, presence: true

	after_image_post_process  :post_process_photo 

	def post_process_photo
  imgfile = EXIFR::JPEG.new(image.queued_for_write[:original].path)
  return unless imgfile
  self.latitude  = imgfile.gps.latitude             
  self.longitude = imgfile.gps.longitude   
  rescue
    false 
  end       

end
