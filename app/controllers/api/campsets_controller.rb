class Api::CampsetsController < ApplicationController
    def index
        @spots = Campsets.all
        render "api/campsets/index"
    end

    def show
        @spot = Campsets.find(params[:id])
        render "api/campsets/show"
    end

    def post_params
        params.require(:campsets).permit(:title,:price,:camp_type)
    end
end
