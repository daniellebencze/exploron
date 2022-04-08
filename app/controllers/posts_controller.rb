class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def index
        posts = Posts.all
        render json: posts
    end

    def show
        post = Post.find(params[:id])
        render json: post
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def destroy
        post = Post.find(params[:id]).destroy
        head :no_content
    end

    private

    def render_not_found
        render json: {"error": "Post not found"}, status: :not_found
    end

    def render_invalid(invalid)
        render json: {"errors": invalid.record.errors.full_messages}
    end

    def post_params
        params.permit(:title, :photograph, :blurb, :destination_id, :user_id)
    end

end
