const cursoModel = require('./models/CourseModel.js')

class CursoController{
    static async listarCursoJson (req,res){
        // var curso = {
        //     "titulo" : "JavaScript" ,
        //     "professor" : "Virmerson" ,
        //     "cargaHoraria" : "60 horas" ,
        //     "dataInicio" : "18/03/2020" ,
        //     "dataTermino" : "18/03/2020"
        // }
        res.json(cursoModel);
    }
    static async listarCurso(req, res) {
        let lista = await cursoModel.find({})
        res.json(lista)
        
    }
    static cadastrarCurso(req, res) {
        cursoModel.create(req.body)
        res.send('Cadastro realizado com sucesso')
    }
}
module.exports = CursoController