# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_18_182933) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "campsites", force: :cascade do |t|
    t.string "title", null: false
    t.string "img_url", null: false
    t.float "longitude", null: false
    t.float "latitude", null: false
    t.text "address", null: false
    t.text "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "state"
    t.index ["title"], name: "index_campsites_on_title"
  end

  create_table "spots", force: :cascade do |t|
    t.string "name", null: false
    t.string "camp_type", null: false
    t.string "img_url", null: false
    t.string "state_location", null: false
    t.integer "host_id", null: false
    t.integer "campsite_id", null: false
    t.integer "price", null: false
    t.integer "capacity", null: false
    t.float "longitude", null: false
    t.float "latitude", null: false
    t.text "address"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["campsite_id"], name: "index_spots_on_campsite_id"
    t.index ["host_id"], name: "index_spots_on_host_id"
    t.index ["latitude"], name: "index_spots_on_latitude"
    t.index ["longitude"], name: "index_spots_on_longitude"
    t.index ["name"], name: "index_spots_on_name", unique: true
    t.index ["price"], name: "index_spots_on_price"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.integer "zip", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
