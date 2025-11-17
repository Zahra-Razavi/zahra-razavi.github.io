import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Save } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface BusinessInfo {
  companyName: string;
  registrationId: string;
  city: string;
  address: string;
  companyPhone: string;
}

export function BusinessRegisteredInfo() {
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>({
    companyName: "",
    registrationId: "",
    city: "",
    address: "",
    companyPhone: "",
  });

  useEffect(() => {
    // Load data from localStorage
    const savedData = localStorage.getItem("onboardingData");
    if (savedData) {
      const data = JSON.parse(savedData);
      if (data.businessInfo) {
        setBusinessInfo(data.businessInfo);
      }
    }
  }, []);

  const handleSave = () => {
    const savedData = localStorage.getItem("onboardingData");
    if (savedData) {
      const data = JSON.parse(savedData);
      data.businessInfo = businessInfo;
      localStorage.setItem("onboardingData", JSON.stringify(data));
      toast.success("Business information updated successfully");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Business Registered Information</CardTitle>
          <CardDescription>
            Update your business registration details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                value={businessInfo.companyName}
                onChange={(e) =>
                  setBusinessInfo({ ...businessInfo, companyName: e.target.value })
                }
                placeholder="Enter company name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="registrationId">Registration ID</Label>
              <Input
                id="registrationId"
                value={businessInfo.registrationId}
                onChange={(e) =>
                  setBusinessInfo({ ...businessInfo, registrationId: e.target.value })
                }
                placeholder="Enter registration ID"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={businessInfo.city}
                onChange={(e) =>
                  setBusinessInfo({ ...businessInfo, city: e.target.value })
                }
                placeholder="Enter city"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyPhone">Company Phone Number</Label>
              <Input
                id="companyPhone"
                value={businessInfo.companyPhone}
                onChange={(e) =>
                  setBusinessInfo({ ...businessInfo, companyPhone: e.target.value })
                }
                placeholder="Enter company phone"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={businessInfo.address}
                onChange={(e) =>
                  setBusinessInfo({ ...businessInfo, address: e.target.value })
                }
                placeholder="Enter business address"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              onClick={handleSave}
              className="bg-teal hover:bg-teal-dark text-white"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
