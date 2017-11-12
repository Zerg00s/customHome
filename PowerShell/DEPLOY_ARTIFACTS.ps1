 param (
    [string]$Path
 )

 Write-Host $Path -ForegroundColor Green
. .\DeploymentSteps\DEPLOYMENT_CONFIG.ps1
. .\DeploymentSteps\DEPLOY_LISTS_AND_FIELDS.ps1
. .\DeploymentSteps\DEPLOY_PAGES.ps1
. .\DeploymentSteps\UploadFolder.ps1

$isError = $true;
while($isError){
    try{
        Set-PnPMasterPage -MasterPageSiteRelativeUrl "_catalogs/masterpage/drps.master" -CustomMasterPageSiteRelativeUrl "_catalogs/masterpage/drps.master"
        $isError = $false
    }
    catch{$isError = $true}
}

