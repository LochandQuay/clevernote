class Api::NotesController < ApplicationController
  def new
    @note = Note.new
  end

  def create
    @note = Note.new(note_params)
    @note.save
    render :show
  end

  def edit
    @note = Note.find(params[:id])
  end

  def update
    @note = Note.find(params[:id])
    @note.update_attributes(note_params)
    render :show
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy
    render :show
  end

  def show
    @note = Note.find(params[:id])
  end

  def index
    @notes = Note.find_notes_by_author(current_user)
    render :index
  end

  def tags
    @note = Note.find(params[:id])
    @tags = @note.tags
    if @tags
      render json: @tags
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  private

  def note_params
    params.require(:note).permit(
      :title, :body, :author_id, :notebook_id, :archived)
  end
end
