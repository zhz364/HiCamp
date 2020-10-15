class Api::SpotsController < ApplicationController
    def index
        @spots = Spot.all
        render "api/spots/index"
    end

    def show
        @spot = Spot.find(params[:id])
        render "api/spots/show"
    end

    def post_params
        params.require(:post).permit(:title,:price,:camp_type)
    end
end
