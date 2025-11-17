import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { User, Mail, Phone, MapPin, Shield } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  location: string;
}

export function UserSettings() {
  const [profile, setProfile] = useState<UserProfile>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    location: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Load user data from localStorage
    const userName = localStorage.getItem("userName") || "";
    const userEmail = localStorage.getItem("userEmail") || "";
    const savedProfile = localStorage.getItem("userProfile");

    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    } else {
      // Initialize with data from onboarding if available
      const onboardingData = localStorage.getItem("onboardingData");
      if (onboardingData) {
        const data = JSON.parse(onboardingData);
        setProfile({
          firstName: data.personalInfo?.firstName || "",
          lastName: data.personalInfo?.lastName || "",
          email: userEmail,
          phone: data.personalInfo?.phoneNumber || "",
          company: data.businessInfo?.companyName || "",
          location: data.personalInfo?.city || "",
        });
      } else {
        setProfile({
          ...profile,
          firstName: userName.split(" ")[0] || "",
          lastName: userName.split(" ")[1] || "",
          email: userEmail,
        });
      }
    }
  }, []);

  const handleProfileSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    localStorage.setItem("userName", `${profile.firstName} ${profile.lastName}`);
    localStorage.setItem("userEmail", profile.email);
    setIsEditing(false);
    toast.success("Profile updated successfully");
  };

  const getInitials = () => {
    return `${profile.firstName.charAt(0)}${profile.lastName.charAt(0)}`.toUpperCase() || "U";
  };

  return (
    <div className="p-6 space-y-6 w-full">
      {/* Profile Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal information and contact details
              </CardDescription>
            </div>
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-teal text-white text-lg">
                {getInitials()}
              </AvatarFallback>
            </Avatar>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <Input
                  id="firstName"
                  value={profile.firstName}
                  onChange={(e) =>
                    setProfile({ ...profile, firstName: e.target.value })
                  }
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <Input
                  id="lastName"
                  value={profile.lastName}
                  onChange={(e) =>
                    setProfile({ ...profile, lastName: e.target.value })
                  }
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                value={profile.email}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile({ ...profile, phone: e.target.value })
                  }
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                value={profile.company}
                onChange={(e) =>
                  setProfile({ ...profile, company: e.target.value })
                }
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <Input
                id="location"
                value={profile.location}
                onChange={(e) =>
                  setProfile({ ...profile, location: e.target.value })
                }
                disabled={!isEditing}
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            {isEditing ? (
              <>
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleProfileSave}
                  className="bg-teal hover:bg-teal-dark text-white"
                >
                  Save Changes
                </Button>
              </>
            ) : (
              <Button
                onClick={() => setIsEditing(true)}
                className="bg-teal hover:bg-teal-dark text-white"
              >
                Edit Profile
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Security Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-teal" />
            <div>
              <CardTitle>Security</CardTitle>
              <CardDescription>
                Manage your account security settings
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Password</Label>
            <p className="text-sm text-muted-foreground">
              Last changed: Never
            </p>
            <Button variant="outline" className="mt-2">
              Change Password
            </Button>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label>Two-Factor Authentication</Label>
            <p className="text-sm text-muted-foreground">
              Add an extra layer of security to your account
            </p>
            <Button variant="outline" className="mt-2">
              Enable 2FA
            </Button>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label>Active Sessions</Label>
            <p className="text-sm text-muted-foreground">
              Manage devices where you're currently logged in
            </p>
            <Button variant="outline" className="mt-2">
              View Active Sessions
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}