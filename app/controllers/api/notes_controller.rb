class Api::NotesController < ApplicationController
  def new
  end

  def create
    @note = Note.create!(note_params)
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
    render :index
  end

  def show
    @note = Note.find(params[:id])
  end

  def index
    @notes = Note.all_notes_by_author(params[:])
    render :index
  end

  private

  def note_params
    params.require(:note).permit(
      :title, :body, :author_id, :notebook_id, :archived
      )
end
