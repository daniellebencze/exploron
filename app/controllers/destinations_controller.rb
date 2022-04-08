class DestinationsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
        destinations = Destination.all
        render json: destinations
    end

    def show
        destination = Destination.find(param[:id])
        render json: destinations
    end

    private

    def render_not_found
        render json: {"error": "Destination not found"}, status: :not_found
    end

end
