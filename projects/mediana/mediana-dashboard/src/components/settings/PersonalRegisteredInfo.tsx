import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Save } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface PersonalInfo {
  firstName: string;
  lastName: string;
  mobile: string;
  idNumber: string;
  birthday: string;
  city: string;
  address: string;
  phoneNumber: string;
}

export function PersonalRegisteredInfo() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: "",
    lastName: "",
    mobile: "",
    idNumber: "",
    birthday: "",
    city: "",
    address: "",
    phoneNumber: "",
  });

  useEffect(() => {
    // Load data from localStorage
    const savedData = localStorage.getItem("onboardingData");
    if (savedData) {
      const data = JSON.parse(savedData);
      if (data.personalInfo) {
        setPersonalInfo(data.personalInfo);
      }
    }
  }, []);

  const handleSave = () => {
    const savedData = localStorage.getItem("onboardingData");
    if (savedData) {
      const data = JSON.parse(savedData);
      data.personalInfo = personalInfo;
      localStorage.setItem("onboardingData", JSON.stringify(data));
      toast.success("Personal information updated successfully");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Personal Registered Information</CardTitle>
          <CardDescription>
           Update your personal registration details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={personalInfo.firstName}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, firstName: e.target.value })
                }
                placeholder="Enter first name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={personalInfo.lastName}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, lastName: e.target.value })
                }
                placeholder="Enter last name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input
                id="mobile"
                value={personalInfo.mobile}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, mobile: e.target.value })
                }
                placeholder="Enter mobile number"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                value={personalInfo.phoneNumber}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, phoneNumber: e.target.value })
                }
                placeholder="Enter phone number"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="idNumber">ID Number</Label>
              <Input
                id="idNumber"
                value={personalInfo.idNumber}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, idNumber: e.target.value })
                }
                placeholder="Enter ID number"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthday">Birthday</Label>
              <Input
                id="birthday"
                type="date"
                value={personalInfo.birthday}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, birthday: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={personalInfo.city}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, city: e.target.value })
                }
                placeholder="Enter city"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={personalInfo.address}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, address: e.target.value })
                }
                placeholder="Enter address"
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
