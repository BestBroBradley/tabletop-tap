const intKeys = ["min_time", "max_time", "min_players", "max_players"];
const floatKeys = ["rating", "abv", "price", "id"];

function toNum (data) {
  for (let key in data) {
    if (intKeys.includes(key)) {
        data[key] = parseInt(data[key]);
    } else if (floatKeys.includes(key)) {
        data[key] = parseFloat(data[key]);
    }
  }
  return data
};


module.exports = toNum;