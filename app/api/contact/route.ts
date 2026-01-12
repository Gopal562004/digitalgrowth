import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Get client IP address safely
    let clientIp = "unknown";
    try {
      const forwarded = request.headers.get("x-forwarded-for");
      if (forwarded) {
        clientIp = forwarded.split(",")[0].trim();
      } else {
        const remoteAddress = request.headers.get("x-real-ip");
        if (remoteAddress) {
          clientIp = remoteAddress;
        }
      }
    } catch (error) {
      console.log("Could not get client IP:", error);
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    // 4. Send confirmation email to user

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Log the submission (in production, replace with actual storage)
    console.log("Contact form submission:", {
      name,
      email,
      company,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
      ip: clientIp,
    });

    // Return success response
    return NextResponse.json({
      success: true,
      message:
        "Thank you for your message! We will get back to you within 24 hours.",
      data: {
        name,
        email,
        service,
        submittedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Contact API endpoint. Use POST to submit contact form." },
    { status: 200 }
  );
}
