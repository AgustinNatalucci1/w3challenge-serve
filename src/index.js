const express = require('express');
const { Op } = require('sequelize');
const Paises = require('./model/population.model');

const app = express();

app.get('/getList/:str', async (req, res) => {
  if (req.params.str.length < 3){
    res.status(204).json({
      ok: false,
      status: 204,
    });
    return;
  }else{
    const paises = await getPaisesByStr(req.params.str);
    res.status(200).json({
      ok: true,
      status: 200,
      body: paises
    })
  };
});

// async function getPaisesByStr(str) {
//   let whereClause = {};
//   for (let i = 0; i < str.length; i++) {
//     whereClause[`pais${i}`] = { [Op.like]: `%${str[i]}%` };
//   }

//   const paises = await Paises.findAll({
//     where: whereClause,
//     limit: 5,
//   });

//   return paises;
// }

async function getPaisesByStr(str) {
  let whereClause = [];
  for (let i = 0; i < str.length; i++) {
    whereClause.push({ pais: { [Op.like]: `%${str[i]}%` } });
  }

  const paises = await Paises.findAll({
    where: {
      [Op.and]: whereClause
    },
    limit: 5,
  });

  let poblacionTotal = 0;

  paises.map((p) => {
    poblacionTotal = poblacionTotal + p.poblacion;
    console.log("Poblacion Total: ", poblacionTotal);
  });

  paises.map((p) => {
    let porcentaje = `%${((p.poblacion * 100) / poblacionTotal).toFixed(2)}`;
    p.dataValues.porcentaje = porcentaje; 
  })
  

  return paises;
}



// PORT
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening on port ${port}...`));
