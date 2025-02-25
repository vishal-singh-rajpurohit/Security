import { useState } from "react";
import axios from 'axios'
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
    indoorOutdoor: "INDOOR",
    AboutItem: "",
    channel: "4",
    hdd: "521GB",
    tag: "BUDGET",
    MegaPixels: 2
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("image", formData.image);

    if (formData.display.length) {
      formData.display.forEach((file, index) => {
        formDataToSend.append(`display`, file);
      });
    }

    formDataToSend.append("ProductName", formData.name);
    formDataToSend.append("PriceForCustomers", formData.price);
    formDataToSend.append("AdvancedPaymentAmmount", formData.advancedAmount);
    formDataToSend.append("Description", formData.description);
    formDataToSend.append("KeyWords", formData.keywords);
    formDataToSend.append("premium", formData.premium);
    formDataToSend.append("CameraQuality", formData.cameraQuality);
    formDataToSend.append("CameraType", formData.cameraType);
    formDataToSend.append("IndoorOutdoor", formData.indoorOutdoor);
    formDataToSend.append("AboutItem", formData.AboutItem);
    formDataToSend.append("Channel", formData.channel);
    formDataToSend.append("Hdd", formData.hdd);
    formDataToSend.append("Tag", formData.tag);
    formDataToSend.append("MegaPixels", formData.MegaPixels);
    formDataToSend.append("NumberOfCameras", formData.MegaPixels);

    await axios.post(`${process.env.REACT_APP_BACKEND}/addproduct`, formDataToSend).then((resp) => {
      console.log("Product added ", resp)
    }).catch((e) => {
      console.log("error in adding ", e)
    })

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
        <label htmlFor="premium" className="lab">Premium or not</label>
        <select name="premium" onChange={handleChange}>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        <label htmlFor="NumberOfCameras" className="lab">Number of cameras</label>
        <select name="NumberOfCameras" onChange={handleChange}>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="8">8</option>
        </select>
        <label htmlFor="MegaPixels" className="lab">Mega Pixels</label>
        <select name="MegaPixels" onChange={handleChange}>
          <option value="2">2 MP</option>
          <option value="4">4 MP</option>
          <option value="5">5 MP</option>
          <option value="8">8 MP</option>
        </select>
        <label htmlFor="cameraQuality" className="lab">Camera Quality</label>
        <select name="cameraQuality" onChange={handleChange}>
          <option value="IP">IP</option>
          <option value="HD">HD</option>
        </select>
        <input type="file" name="display" multiple accept="image/*" onChange={handleChange} />
        <input type="text" name="cameraType" placeholder="Camera Type" onChange={handleChange} />
        <label htmlFor="indoorOutdoor" className="lab">Indoor / Outdoor / Complete</label>
        <select name="indoorOutdoor" onChange={handleChange}>
          <option value="INDOOR">INDOOR</option>
          <option value="OUTDOOR">OUTDOOR</option>
          <option value="COMPLETE">COMPLETE</option>
        </select>
        <textarea name="AboutItem" placeholder="About Item" onChange={handleChange} />
        <label htmlFor="indoorOutdoor" className="lab">Channel of DVR / NVR</label>
        <select name="channel" onChange={handleChange}>
          {[4, 8, 16].map((ch) => (
            <option key={ch} value={ch}>{ch}</option>
          ))}
        </select>
        <label htmlFor="hdd" className="lab">Size if Hard Disk</label>
        <select name="hdd" onChange={handleChange}>
          {["521GB", "1TB", "2TB", "5TB", "10TB"].map((hdd) => (
            <option key={hdd} value={hdd}>{hdd}</option>
          ))}
        </select>
        <label htmlFor="hdd" className="lab">Some search keyword</label>
        <select name="tag" onChange={handleChange}>
          <option value="BUDGET">BUDGET</option>
          <option value="BASIC">BASIC</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Add;


