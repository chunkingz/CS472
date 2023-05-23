const { db } = require("./connection");

exports.analyzeWord = (req, res) => {
  let { searchString } = req.query;

  const sql = `SELECT * FROM entries WHERE word LIKE '${searchString}'`;

  if (db.state === "authenticated") {
    runQuery(sql, res);
  } else {
    db.connect((err) => {
      if (err) throw err;
      runQuery(sql, res);
    });
  }
};

function runQuery(sql, res) { 
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
        res.end();
    });
}