class Coffee < ApplicationRecord
  has_many :logs, dependent: :destroy
end
