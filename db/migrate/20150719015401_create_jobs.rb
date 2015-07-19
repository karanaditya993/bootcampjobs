class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :location
      t.text :description
      t.string :link_to_original
      t.string :posted_date

      t.timestamps null: false
    end
  end
end
