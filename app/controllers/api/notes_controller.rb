class Api::NotesController < ApplicationController
  # before_action :require_login

  def new
    @note = Note.new
  end

  def create
    @note = Note.new(note_params)
    if @note.save
      render 'api/notes/new_show'
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def edit
    @note = Note.find(params[:id])
    if @note.author_id != current_user.id
      render status: 401
    else
      render 'api/notes/new_show'
    end
  end

  def update
    @note = Note.find(params[:id])
    @note.update_attributes(note_params)
    render 'api/notes/new_show'
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy
    render 'api/notes/new_show'
  end

  def show
    @note = Note.includes(:tags, :notebook).find(params[:id])
    if !current_user || @note.author_id != current_user.id
      render json: {}
    else
      render 'api/notes/new_show'
    end
  end

  def index
    @notes = Note.find_notes_by_author(current_user)
    @sorted_notes = @notes.order(updated_at: :desc).pluck(:id)
    render :index
  end

  # def tags
  #   @note = Note.find(params[:id])
  #   @tags = @note.tags
  #   if @tags
  #     render json: @tags
  #   else
  #     render json: @note.errors.full_messages, status: 422
  #   end
  # end

  private

  def note_params
    params.require(:note).permit(
      :title, :body, :author_id, :notebook_id, :archived)
  end
end
