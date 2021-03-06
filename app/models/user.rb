class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :pins
	has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "30x30>" }, :default_url => "missingprofilephoto.png"
	validates_attachment_content_type :avatar, :content_type => ["image/jpg", "image/jpeg", "image/png"]
  validates :name, presence: true
  
end
