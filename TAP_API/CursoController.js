class CursoController{
    static async listarCursoJson (req,res){
        var curso = {
            "titulo" : "JavaScript" ,
            "professor" : "Virmerson" ,
            "cargaHoraria" : "60 horas" ,
            "dataInicio" : "18/03/2020" ,
            "dataTermino" : "18/03/2020"
        }
        res.json(curso);
    }

    static async listaCurso(req, res) {
        let lista = await CourseModel.find({})
        res.json('lista')
    }

    static cadastraCurso(req, res) {
        CourseModel.create(req.body)
        res.send('Cadastrando realizado com sucesso')
    }
}
module.exports = CursoController