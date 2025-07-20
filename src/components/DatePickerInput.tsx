import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DatePickerInputProps {
  date: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
  placeholder?: string;
}

export function DatePickerInput({ date, onDateChange, placeholder = "Enter your birthdate to start" }: DatePickerInputProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "flex-1 h-14 px-6 justify-start text-left font-normal bg-input border-border hover:bg-muted/50 transition-colors",
            !date && "text-muted-foreground"
          )}
        >
          <span className="flex-1">
            {date ? format(date, "MMMM dd, yyyy") : placeholder}
          </span>
          <CalendarIcon className="ml-4 h-5 w-5 text-gold" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-card border-gold/20" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onDateChange}
          initialFocus
          className="p-3 pointer-events-auto"
          disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
        />
      </PopoverContent>
    </Popover>
  );
}