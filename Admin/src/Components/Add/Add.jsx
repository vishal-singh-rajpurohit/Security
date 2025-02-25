import { useState } from "react";
import './add.css'
const Add = () => {

  const [formData, setFormData] = useState({
    image: null,
    name: "",
    price: "",
    advancedAmount: "",
    description: "",
    keywords: "",
    premium: "false",
    cameraQuality: "IP",
    display: [],
    cameraType: "",
    indoorOutdoor: "Indoor",
    aboutItem: "",
    channel: "4",
    hdd: "521GB",
    tag: "Budget",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files.length > 1 ? Array.from(files).slice(0, 5) : files[0],
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>CCTV Product Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="file" name="image" accept="image/*" onChange={handleChange} />
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="number" name="price" placeholder="Price" onChange={handleChange} />
        <input type="number" name="advancedAmount" placeholder="Advanced Amount" onChange={handleChange} />
        <textarea name="description" placeholder="Description" onChange={handleChange} />
        <input type="text" name="keywords" placeholder="Keywords" onChange={handleChange} />
        <select name="premium" onChange={handleChange}>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        <select name="cameraQuality" onChange={handleChange}>
          <option value="IP">IP</option>
          <option value="HD">HD</option>
        </select>
        <input type="file" name="display" multiple accept="image/*" onChange={handleChange} />
        <input type="text" name="cameraType" placeholder="Camera Type" onChange={handleChange} />
        <select name="indoorOutdoor" onChange={handleChange}>
          <option value="Indoor">Indoor</option>
          <option value="Outdoor">Outdoor</option>
          <option value="Both">Both</option>
        </select>
        <textarea name="aboutItem" placeholder="About Item" onChange={handleChange} />
        <select name="channel" onChange={handleChange}>
          {[4, 8, 16].map((ch) => (
            <option key={ch} value={ch}>{ch}</option>
          ))}
        </select>
        <select name="hdd" onChange={handleChange}>
          {["521GB", "1TB", "2TB", "5TB", "10TB"].map((hdd) => (
            <option key={hdd} value={hdd}>{hdd}</option>
          ))}
        </select>
        <select name="tag" onChange={handleChange}>
          <option value="Budget">Budget</option>
          <option value="Basic">Basic</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Add;


