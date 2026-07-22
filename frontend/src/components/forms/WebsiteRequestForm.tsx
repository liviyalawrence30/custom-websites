import { useState } from "react";
import api from "../../api/api";
import "../../styles/WebsiteRequestForm.css";
import { useNavigate } from "react-router-dom";

function WebsiteRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    websiteType: "",
    budget: "",
    description: "",

    numberOfPages: "",
    featureNeeds: [] as string[],
    hosting: false,
    maintenanceFrequency: "",
    seoLevel: "",
    discoveryCall: false,
  });
  const navigate = useNavigate();


  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFeatureChange = (feature: string) => {
  setFormData((prev) => ({
    ...prev,
    featureNeeds: prev.featureNeeds.includes(feature)
      ? prev.featureNeeds.filter((item) => item !== feature)
      : [...prev.featureNeeds, feature],
  }));
};

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const requestData = {
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  business_name: formData.businessName,
  website_type: formData.websiteType,
  budget: formData.budget,
  description: formData.description,

  number_of_pages: formData.numberOfPages,
  feature_needs: formData.featureNeeds.join(", "),
  hosting: formData.hosting,
  maintenance_frequency: formData.maintenanceFrequency,
  seo_level: formData.seoLevel,
  discovery_call: formData.discoveryCall,
};

    try {
      const response = await api.post("/website-requests/", requestData);

// Reset the form first
setFormData({
  name: "",
  email: "",
  phone: "",
  businessName: "",
  websiteType: "",
  budget: "",
  description: "",

  numberOfPages: "",
  featureNeeds: [],
  hosting: false,
  maintenanceFrequency: "",
  seoLevel: "",
  discoveryCall: false,
});

// Then navigate
if (formData.discoveryCall) {
  navigate("/booking", {
    state: {
      websiteRequest: response.data,
    },
  });
} else {
  navigate("/request-success");
}
    } catch (error: any) {
  console.error("Axios Error:", error);

  if (error.response) {
    console.log("Status:", error.response.status);
    console.log("Response:", error.response.data);

    alert(
      `Error ${error.response.status}: ${JSON.stringify(
        error.response.data
      )}`
    );
  } else if (error.request) {
    console.log("No response received.");
    alert("Backend is not responding.");
  } else {
    console.log(error.message);
    alert(error.message);
  }
}
  };

  return (
  <form className="website-form" onSubmit={handleSubmit}>
    <h2>Plan My Website</h2>

    {/* Contact Information */}
    <h3>Contact Information</h3>

    <div className="form-group">
      <label>Full Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label>Phone Number</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label>Business Name</label>
      <input
        type="text"
        name="businessName"
        value={formData.businessName}
        onChange={handleChange}
      />
    </div>

    {/* Website Requirements */}
    <h3>Website Requirements</h3>

    <div className="form-group">
      <label>Website Type</label>

      <select
        name="websiteType"
        value={formData.websiteType}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Business">Business</option>
        <option value="E-Commerce">E-Commerce</option>
        <option value="Portfolio">Portfolio</option>
        <option value="Blog">Blog</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div className="form-group">
      <label>Number of Pages</label>

      <select
        name="numberOfPages"
        value={formData.numberOfPages}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="1-5">1–5</option>
        <option value="6-10">6–10</option>
        <option value="10+">10+</option>
      </select>
    </div>

    <div className="form-group">
      <label>Feature Needs</label>

      <div className="checkbox-grid">
        {[
          "Booking Form",
          "Appointment Booking",
          "Automated Emails",
          "WhatsApp Integration",
          "Live Chat",
          "Blog",
          "E-Commerce",
          "Payment Gateway",
          "User Login",
          "Admin Dashboard",
        ].map((feature) => (
          <label key={feature}>
            <input
              type="checkbox"
              checked={formData.featureNeeds.includes(feature)}
              onChange={() => handleFeatureChange(feature)}
            />
            {feature}
          </label>
        ))}
      </div>
    </div>

    {/* Additional Services */}
    <h3>Additional Services</h3>

    <div className="form-group">
      <label>
        <input
          type="checkbox"
          checked={formData.hosting}
          onChange={(e) =>
            setFormData({
              ...formData,
              hosting: e.target.checked,
            })
          }
        />
        I need Hosting
      </label>
    </div>

    <div className="form-group">
      <label>Maintenance Frequency</label>

      <select
        name="maintenanceFrequency"
        value={formData.maintenanceFrequency}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Monthly">Monthly</option>
        <option value="Quarterly">Quarterly</option>
        <option value="Yearly">Yearly</option>
      </select>
    </div>

    <div className="form-group">
      <label>SEO Level</label>

      <select
        name="seoLevel"
        value={formData.seoLevel}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Basic">Basic</option>
        <option value="Advanced">Advanced</option>
        <option value="Premium">Premium</option>
      </select>
    </div>

    {/* Budget */}
    <h3>Project Details</h3>

    <div className="form-group">
      <label>Estimated Budget</label>

      <input
        type="text"
        name="budget"
        value={formData.budget}
        onChange={handleChange}
      />
    </div>

    <div className="form-group">
      <label>Project Description</label>

      <textarea
        rows={5}
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
    </div>

    <div className="form-group">
      <label>
        <input
          type="checkbox"
          checked={formData.discoveryCall}
          onChange={(e) =>
            setFormData({
              ...formData,
              discoveryCall: e.target.checked,
            })
          }
        />
        I don't know where to start – just book me a discovery call.
      </label>
    </div>
    <div className="form-checkbox">
  <input
    type="checkbox"
    id="privacyConsent"
    required
  />

  <label htmlFor="privacyConsent">
    I agree that my personal information may be used to contact me regarding my website enquiry. 
  </label>
</div>

    <button type="submit" className="submit-btn">
      Submit Request
    </button>
  </form>
);
}

export default WebsiteRequestForm;