class Api::TagsController < ApplicationController
  def new
    @tag = Tag.new
  end

  def create
    @tag = Tag.find_or_create_by(name: tag_params[:name])
    @tagging = Tagging.find_or_create_by(
      note_id: tag_params[:note_id],
      tag_id: @tag.id
    )
    render json: @tag
  end

  def destroy
    @tag = Tag.find(params[:id])
    if @tag
      @tag.destroy
      render json: @tag
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def index
    # get all tags by user
    @tags = []
    notes = current_user.notes.includes(:tags)
    notes.each do |note|
      @tags += note.tags
    end
    @tags = @tags.uniq
    @tag_ids = @tags.pluck(:id)
  end

  def show
    @tag = Tag.find(params[:id])

    if @tag
      render json: @tag
    else
      render json: ["tag does not exist"], status: 404
    end

    # @tagged_notes = []
    # tags = current_user.includes(:tags)
    # if @tag
    #   notes.each do |note|
    #     @tagged_notes << note if note.taggings.any? { |tagging| tagging.tag_id == @tag.id }
    #   end
    #   render json: @tagged_notes
    # else
    #   render json: @tag.errors.full_messages, status: 422
    # end
  end

  def destroyTagging
    @tag = Tag.find(params[:id])
    @tagging = @tag.taggings.select { |tagging| tagging.note_id == tag_params[:note_id].to_i }.first
    if @tagging
      @tagging.destroy
      render json: @tagging
    else
      render json: @tagging.errors.full_messages, status: 422
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:name, :note_id)
  end
end
