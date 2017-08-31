class Api::TagsController < ApplicationController
  def new
    @tag = Tag.new
  end

  def create
    @tag = Tag.find_or_create_by(name: tag_params[:name])
    if @tag
      @tagging = Tagging.find_or_create_by(
      note_id: tag_params[:note_id],
      tag_id: @tag.id
      )
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    if @tag
      @tag.destroy
      render :show
    else
      render json: ['Error deleting tag'], status: 422
    end
  end

  def index
    @tags = current_user.tags.uniq
    @tag_ids = @tags.pluck(:id)
  end

  def show
    @tag = Tag.find(params[:id])

    if !@tag
      render json: ["tag does not exist"], status: 404
    end
  end

  def destroyTagging
    @tag = Tag.find(params[:id])
    @tagging = Tagging.find_by(note_id: tag_params[:note_id], tag_id: params[:id])
    if @tagging
      @tagging.destroy
      @note = Note.find(tag_params[:note_id])
      render "api/notes/new_show"
    else
      render json: @tagging.errors.full_messages, status: 422
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:name, :note_id)
  end
end
