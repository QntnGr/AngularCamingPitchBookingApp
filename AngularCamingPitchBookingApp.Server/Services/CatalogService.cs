using AngularCamingPitchBookingApp.Server.Entities;
using AngularCamingPitchBookingApp.Server.Infrastruture;
using Microsoft.EntityFrameworkCore;

namespace AngularCamingPitchBookingApp.Server.Services;

public class CatalogService : ICatalogService
{
    readonly CatalogContext _dbContext;
    public CatalogService(CatalogContext catalogContext)
    {
        _dbContext = catalogContext;
    }

    public async Task<int> DeleteById(int id)
    {
        var pitch = await _dbContext.CampingPitches.FindAsync(id);
        if(pitch != null)
        {
            _dbContext.CampingPitches.Remove(pitch);
            return await _dbContext.SaveChangesAsync();
        }
        return int.MinValue;
    }

    public async Task<List<CampingPitch>> GetAll()
    {
        return await _dbContext.CampingPitches.ToListAsync();
    }

    public async Task<CampingPitch?> GetLastItem()
    {
        return await _dbContext.CampingPitches.OrderByDescending(cp => cp.Id).FirstOrDefaultAsync();
    }

    public async Task Insert(CampingPitch item)
    {
        await _dbContext.AddAsync(item);

        await _dbContext.SaveChangesAsync();
    }

    public async Task UpadteImageUrlById(int id, string url)
    {
        await _dbContext.CampingPitches.Where(cp => cp.Id == id)
            .ExecuteUpdateAsync(setter => setter.SetProperty(item => item.ImageUrl, url));
    }
}