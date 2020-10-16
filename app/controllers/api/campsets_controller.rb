class Api::CampsetsController < ApplicationController
    def index
        @campsets = Campset.all
        render "api/campsets/index"
    end

    def show
        @campset = Campset.find(params[:id])
        render "api/campsets/show"
    end

end
