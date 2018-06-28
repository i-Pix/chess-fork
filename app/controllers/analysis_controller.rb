require 'eco_classifier'

class AnalysisController < ActionController::Base
  layout 'application'

  def index
  end

  # params - pgn - input a pgn
  #
  def get_opening
    if params[:moves]
      render json: {
        opening: EcoClassifier.classify_moves(params[:moves]).as_json
      }
    else
      render json: {}
    end
  end
end
