using AngularCamingPitchBookingApp.Server.Infrastruture;
using AngularCamingPitchBookingApp.Server.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "Pitch Booking",
        Version = "v1"
    });
});

builder.Services.AddDbContext<CatalogContext>();

builder.Services.AddHttpContextAccessor();
builder.Services.AddScoped<ICatalogService, CatalogService>();
builder.Services.AddScoped<IBookingService, BookingService>();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
