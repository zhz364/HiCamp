class Api::ReviewsController < ApplicationController
    def index
        @reviews = Review.where(spot_id: params[:spot_id])
        if @reviews.length > 0
            render :index
        else 
            render json: {}
        end 
    end 

    def create
        @review = Review.new(reviewParams)
        if @review.save
            render :show
        else 
            render json: @review.errors.full_messages, status: 400
        end 
    end 

    def update
        @review = Review.find(params[:id])
        if @review.update_attributes(reviewParams)
            render :show
        else 
            render json: @review.errors.full_messages, status: 400
        end 
    end 

    def destroy
        @review = Review.find(params[:id]) 
        if @review.destroy
            render :show
        else
            render json: @review.errors.full_messages, status: 404
        end
    end 

    private
    def reviewParams
        params.require(:review).permit(:author_id, :spot_id, :title, :body)
    end 
end