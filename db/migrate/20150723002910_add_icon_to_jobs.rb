class AddIconToJobs < ActiveRecord::Migration
  def change
    add_column :jobs, :icon, :string
  end
end
