class Api::BookingsController < ApplicationController
    
    def index
        @bookings = Booking.where(user_id: params[:user_id])
    end

    def create
        @booking = Booking.new(booking_params)
        if @booking.save
            render "api/bookings/show"
        else
            render json: @booking.errors.full_messages, status:401
        end
    end

    def destroy
        @booking = Booking.find(params[:id])
        @booking.destroy

    end

    private
    def booking_params
        params.require(:booking).permit(:user_id,:spot_id,:checkin_date,:checkout_date,:nums_guest,:total_price)
    end
    
end
