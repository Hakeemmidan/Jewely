class PrePopulateCategories < ActiveRecord::Migration[6.0]
  def up
    puts '#### => Prepopulate Categories START'
    categories = ['Bracelets', 'Necklaces', 'Rings', 'Earrings', 'Watches', 'Cufflinks', 'Other']

    categories.each do |ctg|
      if !Category.exists?(name: ctg)
        Category.create(name: ctg)
      end
    end
    puts '#### => Prepopulate Categories END'
  end

  def down
    Category.delete_all
  end
end
