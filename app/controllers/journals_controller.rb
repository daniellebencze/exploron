class JournalsController < ApplicationController
    
    def index
        journal = Journal.all
        render json: journal, status: :ok
    end
    
    def journal
        journal = Journal.where(["user_id = :u", { u: session[:user_id] }])
        render json: journal
    end
    
    def update
        journal = Journal.where(["user_id = :u", { u: session[:user_id] }])
        # journal = Journal.find_by(id: params[:id])
        if journal
            journal.update(journal_params)
            render json: journal, status: :accepted
        else
            render json: { error: "Journal entry not found" }, status: :not_found
        end
    end

    private 

    def journal_params
        params.permit(:wishlist, :itenerary, :other, :user_id)
    end

end
