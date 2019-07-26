require 'byebug'
class Api::SessionsController < ApplicationController
    

    def create
       
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
     
        if @user.nil?
       
            render json: 'No User Found'
        else
        
            login!(@user)
            render json: { email: @user.email, id: @user.id}
        end

    end

    def destroy
        if currnet_user.nil?
            # flash.now[:errors] = ['404 no user to log out']
            render :json => 'Not Found', :status => 404
        else
            logout!
            render "{}"
        end
    end

end



# class SessionsController < ApplicationController
#   def new
#     render :new
#   end

#   def create
#     # Find user by credentials
#     @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
#     # Flash errors, if any.
#     # Render :new if invalid credentials (give the user another chance to login)
#     if @user.nil?
#     #   flash.now[:errors] = ['Invalid email or password.']
#       render :new
#     else
#     # Log them in and redirect them if we find them
#       login!(@user)
#     #   redirect_to user_url(@user)
#     end

#   end

#   def destroy
#     if currnet_user.nil?
#         # flash.now[:errors] = ['404 no user to log out']
#         render :json => 'Not Found', :status => 404
#     end
#     logout!
#     render "{}"
    
#     end
# end