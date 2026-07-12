import React, { useState } from "react";
import {
  BiUser,
  BiGroup,
  BiWine,
  BiBriefcase,
  BiCrown,
  BiCalendar,
  BiTimeFive,
  BiCheckCircle,
  BiChevronRight,
} from "react-icons/bi";

const Reservations = () => {
  const today = new Date().toISOString().split("T")[0];
  const [reservationType, setReservationType] = useState("dine-in");
  const [formData, setFormData] = useState({
    guestName: "",
    phone: "",
    email: "",
    guestCount: "2",
    date: "",
    time: "18:00",
    specialNotes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Configuration matrix for different tier themes on a light background
  const reservationProfiles = {
    "dine-in": {
      title: "Standard Dine-In",
      tagline: "Casual Floor Placement",
      description:
        "Standard floor table assignment for walk-ins, daily lunch, or dinner bookings.",
      capacity: "1 - 6 Guests",
      icon: <BiUser size={22} />,
      gradient: "from-blue-600 to-cyan-500",
      glowColor: "rgba(37, 99, 235, 0.08)",
      bannerBg: "bg-blue-50/70 border-blue-100 text-blue-800",
    },
    family: {
      title: "Family Dining",
      tagline: "Spacious Gatherings",
      description:
        "Configured clusters utilizing extended layouts. Complimentary high-chairs included.",
      capacity: "4 - 12 Guests",
      icon: <BiGroup size={22} />,
      gradient: "from-emerald-600 to-teal-500",
      glowColor: "rgba(5, 150, 105, 0.08)",
      bannerBg: "bg-emerald-50/70 border-emerald-100 text-emerald-800",
    },
    party: {
      title: "Party & Celebration",
      tagline: "Social Lounge Seating",
      description:
        "Lively group arrangements optimized for birthdays, structural events, and hosting.",
      capacity: "10 - 30 Guests",
      icon: <BiWine size={22} />,
      gradient: "from-purple-600 to-pink-500",
      glowColor: "rgba(147, 51, 234, 0.08)",
      bannerBg: "bg-purple-50/70 border-purple-100 text-purple-800",
    },
    corporate: {
      title: "Corporate Session",
      tagline: "Acoustic Privacy Assured",
      description:
        "Quiet peripheral placements suited for business networking, lunches, or corporate dinners.",
      capacity: "5 - 25 Guests",
      icon: <BiBriefcase size={22} />,
      gradient: "from-slate-700 to-slate-900",
      glowColor: "rgba(51, 65, 85, 0.08)",
      bannerBg: "bg-slate-50 border-slate-200 text-slate-800",
    },
    vip: {
      title: "VIP Premium Experience",
      tagline: "Exclusive Vault Access",
      description:
        "Private booth enclosures, custom tailored menus, and structural chef integration privileges.",
      capacity: "1 - 8 Guests",
      icon: <BiCrown size={22} />,
      gradient: "from-amber-500 to-orange-600",
      glowColor: "rgba(245, 158, 11, 0.1)",
      bannerBg: "bg-amber-50/70 border-amber-100 text-amber-900",
    },
  };

  const currentProfile = reservationProfiles[reservationType];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        guestName: "",
        phone: "",
        email: "",
        guestCount: "2",
        date: "",
        time: "18:00",
        specialNotes: "",
      });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased selection:bg-blue-500/10">
      <div className=" mx-auto">
        {/* Dynamic Light Header */}
        <div className="relative border-b border-slate-200 pb-8 mb-12">
          <div className="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
            <span className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)] animate-pulse"></span>
            <span>Table Operations Matrix</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Reserve a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Table
            </span>
          </h1>
          <p className="mt-3 text-sm text-slate-500 max-w-2xl leading-relaxed">
            Select your preferred dining profile below to route your
            configuration to our hosting registry. Live verification will adjust
            structural floor layouts automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Modern Tier Switchers */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Dining Tier Spectrum
              </span>
              <span className="text-[10px] bg-slate-50 text-slate-500 border border-slate-200 px-2 py-0.5 rounded-full font-mono font-semibold">
                {Object.keys(reservationProfiles).length} Environments
              </span>
            </div>

            <div className="space-y-3">
              {Object.entries(reservationProfiles).map(([key, profile]) => {
                const isSelected = reservationType === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setReservationType(key)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative group flex items-center justify-between ${
                      isSelected
                        ? "border-slate-300 bg-slate-50/50 shadow-sm"
                        : "border-slate-200 bg-white hover:bg-slate-50/30 hover:border-slate-300/70"
                    }`}
                    style={{
                      boxShadow: isSelected
                        ? `0 10px 25px -5px ${profile.glowColor}`
                        : "",
                    }}
                  >
                    {/* Selected Active Border Glow Accent */}
                    {isSelected && (
                      <div
                        className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${profile.gradient} rounded-l-xl`}
                      />
                    )}

                    <div className="flex items-center space-x-4 min-w-0">
                      <div
                        className={`p-3 rounded-xl border transition-transform duration-300 ${
                          isSelected
                            ? `bg-gradient-to-br ${profile.gradient} text-white border-transparent scale-105 shadow-sm`
                            : "bg-slate-50 text-slate-500 border-slate-200 group-hover:text-slate-700"
                        }`}
                      >
                        {profile.icon}
                      </div>

                      <div className="min-w-0">
                        <p
                          className={`text-sm font-bold tracking-wide transition-colors ${isSelected ? "text-slate-900" : "text-slate-700"}`}
                        >
                          {profile.title}
                        </p>
                        <p className="text-xs text-slate-400 mt-0.5 tracking-wide font-medium">
                          {profile.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 pl-2 flex-shrink-0">
                      <span
                        className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border ${
                          isSelected
                            ? "bg-white text-slate-700 border-slate-300"
                            : "bg-slate-50 text-slate-400 border-slate-200"
                        }`}
                      >
                        {profile.capacity.split(" ")[0]}
                      </span>
                      <BiChevronRight
                        size={18}
                        className={`transition-transform duration-300 ${
                          isSelected
                            ? "text-slate-500 translate-x-0"
                            : "text-slate-400 -translate-x-1 group-hover:translate-x-0 group-hover:text-slate-600"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Visual Data-Entry Card */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 relative shadow-sm">
            {submitted ? (
              <div className="py-24 text-center space-y-4 animate-fadeIn">
                <div
                  className={`mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br ${currentProfile.gradient} text-white flex items-center justify-center shadow-md`}
                >
                  <BiCheckCircle size={30} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 tracking-wide">
                    Allocation Confirmed
                  </h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                    System payload pushed successfully to central server
                    networks. Registry tables have updated state logs.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Dynamically Generated Header Banner inside Form */}
                <div
                  className={`relative overflow-hidden rounded-xl border p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${currentProfile.bannerBg}`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-br ${currentProfile.gradient} text-white shadow-sm`}
                    >
                      {currentProfile.icon}
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                        Active Configuration Template
                      </span>
                      <h4 className="text-sm font-bold">
                        {currentProfile.title}
                      </h4>
                    </div>
                  </div>
                  <div className="sm:text-right border-t sm:border-t-0 border-slate-200/60 pt-2 sm:pt-0">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                      Structural Limit
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-700">
                      {currentProfile.capacity}
                    </span>
                  </div>
                </div>

                {/* Form Input Blocks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Lead Representative
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.guestName}
                      onChange={(e) =>
                        setFormData({ ...formData, guestName: e.target.value })
                      }
                      className="w-full bg-slate-50 text-slate-900 px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 text-sm transition-all placeholder:text-slate-400"
                      placeholder="Guest profile name"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-slate-50 text-slate-900 px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 text-sm tracking-wide transition-all placeholder:text-slate-400"
                      placeholder="e.g. +977 9867453467"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Representative Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-slate-50 text-slate-900 px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 text-sm transition-all placeholder:text-slate-400"
                    placeholder="routing-endpoint@domain.com"
                  />
                </div>

                {/* Date / Time / Metrics Selector Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      <div className="flex items-center space-x-1">
                        <BiCalendar size={13} className="text-slate-400" />
                        <span>Calendar Date</span>
                      </div>
                    </label>
                    <input
                      type="date"
                      required
                      min={today}
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full bg-slate-50 text-slate-900 px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 text-sm transition-all cursor-pointer text-left"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      <div className="flex items-center space-x-1">
                        <BiTimeFive size={13} className="text-slate-400" />
                        <span>Arrival Clock</span>
                      </div>
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="w-full bg-slate-50 text-slate-900 px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 text-sm transition-all cursor-pointer text-left"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Headcount Input
                    </label>
                    <input
                      type="number"
                      required
                      min="1"
                      value={formData.guestCount}
                      onChange={(e) =>
                        setFormData({ ...formData, guestCount: e.target.value })
                      }
                      className="w-full bg-slate-50 text-slate-900 px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 text-sm transition-all placeholder:text-slate-400"
                      placeholder="Paxs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Operational Execution Notes
                  </label>
                  <textarea
                    rows="3"
                    value={formData.specialNotes}
                    onChange={(e) =>
                      setFormData({ ...formData, specialNotes: e.target.value })
                    }
                    className="w-full bg-slate-50 text-slate-900 px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 text-sm transition-all resize-none placeholder:text-slate-400 font-sans"
                    placeholder="Add special requests, seating preferences, celebration details, or any additional notes for this reservation."
                  />
                </div>

                {/* Highly Stylized Action Trigger */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className={`w-full py-3.5 px-4 font-bold text-sm tracking-wider uppercase text-white rounded-xl shadow-md transition-all duration-300 bg-gradient-to-r ${currentProfile.gradient} hover:opacity-95 transform active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-blue-500/20`}
                  >
                   Confirm Reservation
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
