const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  score: { type: Number, required: true },
  grade: { type: String },
  session: { type: String }
});

gradeSchema.pre("save", function (next) {
  const score = this.score;
  if (score >= 70) this.grade = "A";
  else if (score >= 60) this.grade = "B";
  else if (score >= 50) this.grade = "C";
  else if (score >= 45) this.grade = "D";
  else if (score >= 40) this.grade = "E";
  else this.grade = "F";
  next();
});

 const Grade = mongoose.model("Grade", gradeSchema);

module.exports = Grade;