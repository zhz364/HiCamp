class Api::CampsitesController < ApplicationController
    def index
        @campsites = Campsite.all
        render "api/campsites/index"
    end

    def show
        @campsite = Campsite.find(params[:id])
        render "api/campsites/show"
    end

end
