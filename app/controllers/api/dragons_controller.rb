class Api::DragonsController < ApplicationController
    before_action :set_dragon, only:[:show, :update, :destroy]

    def index
        render json: Dragon.all
    end

    def show
        render json: @dragon
    end

    def create
        dragon = Dragon.new(dragon_params)
        if(dragon.save)
            render json: dragon
        else
            render json: {errors: dragon.errors.full_messages}, status: 422
        end
    end

    def update
        if(@dragon.update(dragon_params))
            render json: @dragon
        else
            render json: {errors: @dragon.errors.full_messages}, status: 422
        end
    end

    def destroy
        render json: @dragon.destroy
    end

    
    private

    def set_dragon
        @dragon = Dragon.find(params[:id])
    end

    def dragon_params
        params.require(:dragon).permit(:variety, :color, :element, :personality, :alignment, :age, :hp, :cr)
    end

end
