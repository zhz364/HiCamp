class User < ApplicationRecord
    validates :username, :password_digest, :session_token, presence: true
    validates :username, :session_token, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true

    has_many :bookings,
        foreign_key: :user_id,
        class_name: :Booking,
        dependent: :destroy

    has_many :reviews,
        foreign_key: :user_id,
        class_name: :Review

    before_validation :ensure_session_token

    attr_reader :password

    


    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(pw)
    end

    def is_password?(pw)
        BCrypt::Password.new(self.password_digest).is_password?(pw)
    end
    
    def self.find_by_credentials(username, pw)
        user = User.find_by(username: username)

        if user && user.is_password?(pw)
            return user
        end
        nil
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end
end
