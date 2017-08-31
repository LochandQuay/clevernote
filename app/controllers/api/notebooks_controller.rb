class Api::NotebooksController < ApplicationController
  def new
    @notebook = Notebook.new
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.save
    render :show
  end

  def edit
    @notebook = Notebook.find(params[:id])
  end

  def update
    @notebook = Notebook.find(params[:id])
    @notebook.update_attributes(notebook_params)
    render :show
  end

  def destroy
    @notebook = Notebook.find(params[:id])
    @notebook.destroy
    render :show
  end

  def show
    @notebook = Notebook.find(params[:id])
  end

  def index
    @notebooks = Notebook.find_current_user_notebooks(current_user)
    @notebook_ids = @notebooks.pluck(:id)
    render :index
  end

  private

  def notebook_params
    params.require(:notebook).permit(:title, :description, :author_id)
  end
end
