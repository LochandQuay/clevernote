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
    render :index
  end

  def show
    @note = Note.find(params[:id])
  end

  def index
    @notes = Note.find_notes_by_author(current_user)
    render :index
  end

  private

  def note_params
    params.require(:note).permit(
      :title, :body, :author_id, :notebook_id, :archived)
  end
end
