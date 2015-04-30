class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def show
  	@user = User.find(params[:id])
  	@pins = @user.pins
  	@pins = @pins.order('created_at DESC').paginate(:page => params[:page], :per_page => 100)
  end

end