const pageController = {
  index: (req, res) => {
    res.send("Funcionando");
  },
  mail: async (req, res) => {
    console.log("hola");
    console.log(req.body);
  },
};

module.exports = pageController;
