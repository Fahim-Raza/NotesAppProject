//get
//homepage

exports.homepage = async (req, res) => {
    const locals = {
        title: "NotesApp"

    }
    res.render('index',locals)
}

//about
exports.about = async (req, res) => {
    const locals = {
        title: "About-NotesApp"

    }
    res.render('about', locals);
}
