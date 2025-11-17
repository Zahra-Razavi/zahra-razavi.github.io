import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Separator } from "../ui/separator";

export function SettingsView() {
  return (
    <div className="p-6 space-y-6 w-full">
      <Card>
        <CardHeader>
          <CardTitle>Display Preferences</CardTitle>
          
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Compact View</Label>
              <p className="text-muted-foreground">
                Display more information in less space
              </p>
            </div>
            <Switch />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Show Sidebar by Default</Label>
              <p className="text-muted-foreground">
                Keep the navigation sidebar expanded
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Enable Animations</Label>
              <p className="text-muted-foreground">
                Show smooth transitions and animations
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Show Tooltips</Label>
              <p className="text-muted-foreground">
                Display helpful tooltips when hovering over elements
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>High Contrast Mode</Label>
              <p className="text-muted-foreground">
                Increase contrast for better visibility
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Desktop Notifications</Label>
              <p className="text-muted-foreground">
                Receive notifications on your desktop
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Email Notifications</Label>
              <p className="text-muted-foreground">
                Get updates via email
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Sound Alerts</Label>
              <p className="text-muted-foreground">
                Play sound for important notifications
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}