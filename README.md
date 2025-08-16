🎓 **Student Course Management System**:

A full-stack web application designed to simplify the process of managing students and courses. The system allows administrators to add, update, and manage student profiles and course details efficiently, reducing manual work and ensuring data consistency.

🚀 Features

👨‍🎓 Student Management – Add, update, and view student profiles.

📚 Course Management – Create and manage courses with details like course ID, name, cost, and duration.

🛠️ Admin Module – Admins can log in, manage students and courses, and monitor overall activity.

📊 Dashboard Overview – Display student and course information in a clean, user-friendly interface.

🛠️ Tech Stack

Frontend:

React.js

Tailwind CSS

Backend:

Spring Boot (REST APIs)

Database:

MySQL

📂 Project Structure
student-course-management/
│── backend/            
│   ├── src/main/java    # Java source files <br>
│   ├── src/main/resources/application.properties<br>
│   └── pom.xml<br>
│
│── frontend/            # React project
│   ├── public/          
│   ├── src/             
│   │   ├── components/  # Reusable components<br>
│   │   ├── pages/       # Pages like Dashboard, Courses, Students<br>
│   │   └── App.js       <br>
│   └── package.json<br>
│
│── README.md<br>

⚙️ Installation & Setup
🔧 Backend (Spring Boot)

**Clone the repository:**

git clone https://github.com/your-username/student-course-management.git
cd student-course-management/backend


**Configure MySQL Database in application.properties**:

spring.datasource.url=jdbc:mysql://localhost:3306/student_dbname
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update


**Run the Spring Boot app:**

mvn spring-boot:run


Backend will start on: http://localhost:8080

🎨 **Frontend (React + Tailwind)**

Go to the frontend folder:

cd ../frontend


**Install dependencies:**

npm install


**Start the development server:**

npm run dev


Frontend will start on: http://localhost:3000

🔗 **API Endpoints**:
Method	Endpoint	Description
GET	/student/fetchall	 for  Getting all students
POST	/student/save	   for Adding a new student
PUT	/student/update/  fr	Udate student details
DELETE	/student/delete/{id} for	Delete a student
GET	/course/fetchall  for	Getting all courses
POST	/course/save  for	Add a new course
PUT	/course/update  for	Update course details
DELETE	/course/delete/{id} for	Delete a course

🎯 **Future Enhancements**:

📑 Student enrollment in multiple courses

📧 Email notifications for students

🔒 Role-based authentication (Admin vs. Student login)

📱 Responsive mobile-friendly design

🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit pull requests.

👨‍💻 Author

Your Name
🔗 LinkedIn | GitHub
