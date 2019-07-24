class Api::UsersController < ApplicationController

    def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render json: 'Creation Successful'
    else
      # Tell the user that something went wrong. Let them try again.
    #   flash.now[:errors] = @user.errors.full_messages
      render json: 'Failed'
    end
  end


  def index
    @users = User.all
    render json: @users
  end


  private

  def user_params
    # params.require(:user).permit(:email, :email)
    # Add password
    params.require(:user).permit(:email, :password)
  end

    

end
