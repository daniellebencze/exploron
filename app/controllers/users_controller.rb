class UsersController < ApplicationController
    # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  def create
    user = User.create(user_params)
    if user.valid?
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

    # def show
    #     user = User.find_by(id: session[:user_id])
    #     if user 
    #         render json: user
    #     else 
    #         render json: {error: "Not authorized"}, status: unathorized
    #     end
    # end

    private

    def user_params
        params.pertmit(:username, :password, :password_confirmation)
    end


end
