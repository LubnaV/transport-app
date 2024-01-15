const book_POST = async (req, res) => {
  try {
    const { toUni, time } = req.body;
    const studentId = req.id; //getting back line 72
    const student = await StudentModel.findById(studentId); //find student document from database with ID
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    if (!student) {
      return res.status(404).json("Student not found");
    }
    
  } catch(error) {
    
  }
};
