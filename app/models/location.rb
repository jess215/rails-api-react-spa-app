class Location < ApplicationRecord
        validates_inclusion_of :rating, :in => 0..5
        validates :rating, numericality: true
end
